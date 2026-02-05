import { CopyButton as html } from './html'
import { CopyButtonClient } from './client.js'
import { define as _define } from '@substrate-system/web-component/util'

// for document.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'copy-button':CopyButton
    }
}

/**
 * This is the full version -- behavior + rendering logic.
 */

export class CopyButton extends CopyButtonClient {
    static TAG = 'copy-button'

    render () {
        const classes = Array.from(this.classList)
        const hint = this.getAttribute('hint')

        // If hint attribute is present, pass it to html generator
        if (this.hasAttribute('hint')) {
            const hintValue = hint === '' || hint === 'true' || hint === null
                ? true
                : hint
            this.innerHTML = html({ classes, hint: hintValue })
        } else {
            this.innerHTML = html({ classes })
        }
    }
}

export default CopyButton

// Use the define function; checks if already registered
_define('copy-button', CopyButton)

export function define () {
    return _define('copy-button', CopyButton)
}
