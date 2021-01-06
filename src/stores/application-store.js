import { makeAutoObservable } from 'mobx'
import {
    defaultOpenApplicationProperties,
    defaultPosition,
    defaultApplicationState
} from '../consts'
import { isMobile } from 'react-device-detect'
import { pick } from 'lodash'
import consumifyObject from '@utils/consumify-object'
import { APP_TYPES } from '@src/consts'
import ErrorSound from '../assets/sounds/error.mp3'
const errorSound = new Audio(ErrorSound);
const defaultMessage = "You are not authorized to access this content. Please contact admin for more information."
const oneDeviceMessage = "You are not authorized to use more than 1 application at once on a mobile device. Please use a laptop for full access"

class ApplicationStore {
    // Desktop
    applications = defaultApplicationState
    topIndex = 7
    menuOpen = false

    // Computer 
    chosenKey = null
    back = null
    next = null

    // Error
    message = null
    type = 'error'

    constructor () {
        makeAutoObservable(this)
    }


    setTopElement = (key, value = this.topIndex + 1) => {
        const labels = document.getElementsByClassName('react-draggable')
        const matchingLabels = Array.prototype.filter.call(
            labels,
            ({ classList }) => Array.prototype.includes.call(classList, key)
        )
        if(matchingLabels.length > 0 && parseInt(matchingLabels[0].style.zIndex) !== parseInt(this.topIndex)) {
            this.topIndex = value
            matchingLabels[0].style.zIndex = value 
        }
    }

    // Actions 
    goBack = () => {
        this.next = this.chosenKey
        this.chosenKey = this.back
        this.back = null
    }

    goNext = () => {
        this.back = this.chosenKey
        this.chosenKey = this.next
        this.next = null
    }

    openMessage = (message = defaultMessage, type = 'error') => {
        this.message = message
        this.type = type
        errorSound.play()
    }

    closeMessage () {
        this.message = null
    }

    unclickEverything = () => {
        // Unclick everthing
        Object.keys(this.applications).forEach(key => {
            this.applications[key].clicked = false
        })
      }
    
    closeMenu = () => {
        this.menuOpen = false
    }

    resetUI = () => {
        this.unclickEverything()
        this.closeMenu()
    }
    
    onClick = (key) => {
        const oldClicked = this.applications[key].clicked
        this.resetUI()
        // Handle double click
        const newLastClicked = new Date().getTime()
        const oldlastClicked = this.applications[key].lastClicked
        if(newLastClicked - oldlastClicked < 400) {
            this.openApplication(key, true)
        }
        this.applications[key].lastClicked = newLastClicked
        this.applications[key].clicked = !oldClicked
    }
    
    openApplication = (key, reset = false) => {
        if(!reset) {
            this.resetUI()
        }
        switch(this.applications[key].type) {
            case APP_TYPES.EXTERNAL:
                window.open(this.applications[key].externalLink)
                break;
            case APP_TYPES.ERROR:
                this.openMessage()
                break;
            default:
                if(this.applications[key].children) {
                    this.back = this.chosenKey
                    this.next = null
                    this.applications['computer'].open = true
                    this.chosenKey = key
                } else if(!this.applications[key].open) {
                    if(isMobile && this.openApps.length > 0) {
                        this.openMessage(oneDeviceMessage)
                    } else {
                        this.applications[key].open = true
                    }
                } else if(this.applications[key].minimized) {
                    this.minimizeApplication(key)
                }
        }
    }

    minimizeApplication = (key) => {
        this.applications[key].minimized = !this.applications[key].minimized
        this.setTopElement(key)
    }

    closeApplication = (key) => {
        Object.assign(this.applications[key], defaultOpenApplicationProperties)
    }

    resize = (key) => {
        this.applications[key].position = this.applications[key].resized === false ? defaultPosition : null
        this.applications[key].resized  = !this.applications[key].resized
    }

    // Computed
    get mappableApps () {
        return consumifyObject(this.applications)
    }

    get visibleApps () {
        return this.mappableApps.filter(application => application.x && application.y)
    }

    get menuApps () {
        const menuKeys = ['computer','work','social','paint','website','notepad','resume','virus']
        const pickedItems = pick(this.applications, menuKeys)
        return consumifyObject(pickedItems)
    }

    get openApps () {
        return this.mappableApps.filter(application => application.open)
    }

    get files () {
        return this.mappableApps.filter(application => application.children)
    }

    get chosenFile () {
        return this.applications[this.chosenKey]
    }

    get unchosenFiles () {
        return this.files.filter(application => application.key !== this.chosenKey)
    }

    get chosenFileChildren () {
        const childrenObject = pick(this.applications, this.chosenFile.children)
        return consumifyObject(childrenObject)

    }
}

const store = new ApplicationStore()
export default store