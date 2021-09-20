import React from "react";
import {Action} from "meta-framework/dist/app/models/components/action";
import {ComponentBase} from "../base/componentBase";

/**
 * Primary UI component for action
 */
export class ButtonComponent extends ComponentBase<Action> {
    onClick() {
        const confirmation = this.props.elementRef().getPropertyValue('action.confirmation');
        const canExecute = confirmation ? window.confirm(confirmation) : true;

        canExecute && this.props.elementRef().execute();
    }

    render() {
        return (
            <button type="button" className="btn btn-primary" hidden={this.state['ui.hidden']} disabled={this.state['ui.disabled']}
                onClick={() => this.onClick()}>{this.props.elementRef().getPropertyValue('ui.label')}</button>
        );
    }
}
