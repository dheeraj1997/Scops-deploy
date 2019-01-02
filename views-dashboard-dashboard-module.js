(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js ***!
  \***************************************************************************/
/*! exports provided: ButtonCheckboxDirective, ButtonRadioGroupDirective, ButtonRadioDirective, ButtonsModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ButtonCheckboxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return ButtonRadioGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ButtonRadioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RADIO_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return RADIO_CONTROL_VALUE_ACCESSOR$1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
var /** @type {?} */ CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnCheckbox]',
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ButtonCheckboxDirective.propDecorators = {
        "btnCheckboxTrue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "btnCheckboxFalse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-pressed',] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
    };
    return ButtonCheckboxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonRadioGroupDirective; }),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioGroupDirective = /** @class */ (function () {
    function ButtonRadioGroupDirective(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioGroupDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnRadioGroup]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioGroupDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    return ButtonRadioGroupDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR$1 = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "value", {
        get: /**
         * Current value of radio component or group
         * @return {?}
         */
        function () {
            return this.group ? this.group.value : this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.group) {
                this.group.value = value;
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
        get: /**
         * If `true` — radio button is disabled
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._disabled = disabled;
            this.setDisabledState(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype._onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    };
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ButtonRadioDirective.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    };
    ButtonRadioDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnRadio]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: ButtonRadioGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    ButtonRadioDirective.propDecorators = {
        "btnRadio": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "uncheckable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isActive": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-pressed',] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
    };
    return ButtonRadioDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                    exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
                },] }
    ];
    return ButtonsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1idXR0b25zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9uLWNoZWNrYm94LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9idXR0b25zL2J1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy9idXR0b24tcmFkaW8uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9ucy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFByb3ZpZGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBUT0RPOiBjb25maWc6IGFjdGl2ZUNsYXNzIC0gQ2xhc3MgdG8gYXBwbHkgdG8gdGhlIGNoZWNrZWQgYnV0dG9uc1xuZXhwb3J0IGNvbnN0IENIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBBZGQgY2hlY2tib3ggZnVuY3Rpb25hbGl0eSB0byBhbnkgZWxlbWVudFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnRuQ2hlY2tib3hdJyxcbiAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgLyoqIFRydXRoeSB2YWx1ZSwgd2lsbCBiZSBzZXQgdG8gbmdNb2RlbCAqL1xuICBASW5wdXQoKSBidG5DaGVja2JveFRydWUgPSB0cnVlO1xuICAvKiogRmFsc3kgdmFsdWUsIHdpbGwgYmUgc2V0IHRvIG5nTW9kZWwgKi9cbiAgQElucHV0KCkgYnRuQ2hlY2tib3hGYWxzZSA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcHJlc3NlZCcpXG4gIHN0YXRlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nO1xuICBwcm90ZWN0ZWQgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByb3RlY3RlZCBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gdmlldyAtPiBtb2RlbFxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlKCF0aGlzLnN0YXRlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUodGhpcy50cnVlVmFsdWUgPT09IHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCB0cnVlVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLmJ0bkNoZWNrYm94VHJ1ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5idG5DaGVja2JveFRydWVcbiAgICAgIDogdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZmFsc2VWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuYnRuQ2hlY2tib3hGYWxzZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5idG5DaGVja2JveEZhbHNlXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0YXRlID8gdGhpcy50cnVlVmFsdWUgOiB0aGlzLmZhbHNlVmFsdWU7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAvLyBtb2RlbCAtPiB2aWV3XG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJ1ZVZhbHVlID09PSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgPyB0aGlzLnRydWVWYWx1ZSA6IHRoaXMuZmFsc2VWYWx1ZTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiIsImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBBIGdyb3VwIG9mIHJhZGlvIGJ1dHRvbnMuXG4gKiBBIHZhbHVlIG9mIGEgc2VsZWN0ZWQgYnV0dG9uIGlzIGJvdW5kIHRvIGEgdmFyaWFibGUgc3BlY2lmaWVkIHZpYSBuZ01vZGVsLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnRuUmFkaW9Hcm91cF0nLFxuICBwcm92aWRlcnM6IFtSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFByb3ZpZGVyLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b24tcmFkaW8tZ3JvdXAuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IFJBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9EaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBDcmVhdGUgcmFkaW8gYnV0dG9ucyBvciBncm91cHMgb2YgYnV0dG9ucy5cbiAqIEEgdmFsdWUgb2YgYSBzZWxlY3RlZCBidXR0b24gaXMgYm91bmQgdG8gYSB2YXJpYWJsZSBzcGVjaWZpZWQgdmlhIG5nTW9kZWwuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tidG5SYWRpb10nLFxuICBwcm92aWRlcnM6IFtSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0RpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8qKiBSYWRpbyBidXR0b24gdmFsdWUsIHdpbGwgYmUgc2V0IHRvIGBuZ01vZGVsYCAqL1xuICBASW5wdXQoKSBidG5SYWRpbzogc3RyaW5nO1xuICAvKiogSWYgYHRydWVgIMOiwoDClCByYWRpbyBidXR0b24gY2FuIGJlIHVuY2hlY2tlZCAqL1xuICBASW5wdXQoKSB1bmNoZWNrYWJsZTogYm9vbGVhbjtcbiAgLyoqIEN1cnJlbnQgdmFsdWUgb2YgcmFkaW8gY29tcG9uZW50IG9yIGdyb3VwICovXG4gIEBJbnB1dCgpIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cCA/IHRoaXMuZ3JvdXAudmFsdWUgOiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVsbCB8IHN0cmluZykge1xuICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICB0aGlzLmdyb3VwLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvKiogSWYgYHRydWVgIMOiwoDClCByYWRpbyBidXR0b24gaXMgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcHJlc3NlZCcpXG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5idG5SYWRpbyA9PT0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlOiAgbnVsbCB8IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBncm91cDogQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXMuZGlzYWJsZWQgfHwgIXRoaXMudW5jaGVja2FibGUgJiYgdGhpcy5idG5SYWRpbyA9PT0gdGhpcy52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnVuY2hlY2thYmxlICYmIHRoaXMuYnRuUmFkaW8gPT09IHRoaXMudmFsdWUgPyB1bmRlZmluZWQgOiB0aGlzLmJ0blJhZGlvO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51bmNoZWNrYWJsZSA9IHR5cGVvZiB0aGlzLnVuY2hlY2thYmxlICE9PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgX29uQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5ncm91cC5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMuZ3JvdXAub25DaGFuZ2UodmFsdWUpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAvLyBtb2RlbCAtPiB2aWV3XG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1jaGVja2JveC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnV0dG9uUmFkaW9EaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1yYWRpby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLXJhZGlvLWdyb3VwLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0J1dHRvbkNoZWNrYm94RGlyZWN0aXZlLCBCdXR0b25SYWRpb0RpcmVjdGl2ZSwgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtCdXR0b25DaGVja2JveERpcmVjdGl2ZSwgQnV0dG9uUmFkaW9EaXJlY3RpdmUsIEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbnNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogQnV0dG9uc01vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBWUEscUJBQWEsK0JBQStCLEdBQWE7SUFDdkQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXVCLEdBQUEsQ0FBQztJQUN0RCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7Ozs7Ozs7OzsrQkFXMkIsSUFBSTs7OztnQ0FFSCxLQUFLO3FCQUl6QixLQUFLO3dCQUtRLFFBQVEsQ0FBQyxTQUFTO3lCQUNqQixRQUFRLENBQUMsU0FBUzs7Ozs7SUFJeEMseUNBQU87Ozs7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FB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

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\r\n      <!--<div class=\"card text-white bg-primary\">-->\r\n        <!--<div class=\"card-body pb-0\">-->\r\n          <!--<div class=\"btn-group float-right\" dropdown>-->\r\n            <!--<button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>-->\r\n              <!--<i class=\"icon-settings\"></i>-->\r\n            <!--</button>-->\r\n            <!--<div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>-->\r\n              <!--<a class=\"dropdown-item\" href=\"#\">Action</a>-->\r\n              <!--<a class=\"dropdown-item\" href=\"#\">Another action</a>-->\r\n              <!--<a class=\"dropdown-item\" href=\"#\">Something else here</a>-->\r\n              <!--<a class=\"dropdown-item\" href=\"#\">Something else here</a>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"text-value\">9.823</div>-->\r\n          <!--<div>Members online</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">-->\r\n          <!--<canvas baseChart class=\"chart\"-->\r\n          <!--[datasets]=\"lineChart1Data\"-->\r\n          <!--[labels]=\"lineChart1Labels\"-->\r\n          <!--[options]=\"lineChart1Options\"-->\r\n          <!--[colors]=\"lineChart1Colours\"-->\r\n          <!--[legend]=\"lineChart1Legend\"-->\r\n          <!--[chartType]=\"lineChart1Type\"></canvas>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\r\n      <!--<div class=\"card text-white bg-info\">-->\r\n        <!--<div class=\"card-body pb-0\">-->\r\n          <!--<button type=\"button\" class=\"btn btn-transparent p-0 float-right\">-->\r\n            <!--<i class=\"icon-location-pin\"></i>-->\r\n          <!--</button>-->\r\n          <!--<div class=\"text-value\">9.823</div>-->\r\n          <!--<div>Members online</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">-->\r\n          <!--<canvas baseChart class=\"chart\"-->\r\n          <!--[datasets]=\"lineChart2Data\"-->\r\n          <!--[labels]=\"lineChart2Labels\"-->\r\n          <!--[options]=\"lineChart2Options\"-->\r\n          <!--[colors]=\"lineChart2Colours\"-->\r\n          <!--[legend]=\"lineChart2Legend\"-->\r\n          <!--[chartType]=\"lineChart2Type\"></canvas>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\r\n      <!--<div class=\"card text-white bg-warning\">-->\r\n        <!--<div class=\"card-body pb-0\">-->\r\n          <!--<div class=\"btn-group float-right\" dropdown>-->\r\n            <!--<button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>-->\r\n              <!--<i class=\"icon-settings\"></i>-->\r\n            <!--</button>-->\r\n            <!--<div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>-->\r\n              <!--<a class=\"dropdown-item\" href=\"#\">Action</a>-->\r\n              <!--<a class=\"dropdown-item\" href=\"#\">Another action</a>-->\r\n              <!--<a class=\"dropdown-item\" href=\"#\">Something else here</a>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"text-value\">9.823</div>-->\r\n          <!--<div>Members online</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"chart-wrapper mt-3\" style=\"height:70px;\">-->\r\n          <!--<canvas baseChart class=\"chart\"-->\r\n          <!--[datasets]=\"lineChart3Data\"-->\r\n          <!--[labels]=\"lineChart3Labels\"-->\r\n          <!--[options]=\"lineChart3Options\"-->\r\n          <!--[colors]=\"lineChart3Colours\"-->\r\n          <!--[legend]=\"lineChart3Legend\"-->\r\n          <!--[chartType]=\"lineChart3Type\"></canvas>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\r\n      <!--<div class=\"card text-white bg-danger\">-->\r\n        <!--<div class=\"card-body pb-0\">-->\r\n          <!--<div class=\"btn-group float-right\" dropdown>-->\r\n            <!--<button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>-->\r\n              <!--<i class=\"icon-settings\"></i>-->\r\n            <!--</button>-->\r\n            <!--<div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>-->\r\n              <!--<a class=\"dropdown-item\" href=\"#\">Action</a>-->\r\n              <!--<a class=\"dropdown-item\" href=\"#\">Another action</a>-->\r\n              <!--<a class=\"dropdown-item\" href=\"#\">Something else here</a>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"text-value\">9.823</div>-->\r\n          <!--<div>Members online</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">-->\r\n          <!--<canvas baseChart class=\"chart\"-->\r\n          <!--[datasets]=\"barChart1Data\"-->\r\n          <!--[labels]=\"barChart1Labels\"-->\r\n          <!--[options]=\"barChart1Options\"-->\r\n          <!--[colors]=\"barChart1Colours\"-->\r\n          <!--[legend]=\"barChart1Legend\"-->\r\n          <!--[chartType]=\"barChart1Type\"></canvas>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n  </div><!--/.row-->\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n          <h4 class=\"card-title mb-0\">Traffic</h4>\r\n          <div class=\"small text-muted\">November 2017</div>\r\n        </div><!--/.col-->\r\n        <div class=\"col-sm-7 d-none d-md-block\">\r\n          <button type=\"button\" class=\"btn btn-primary float-right\"><i class=\"icon-cloud-download\"></i></button>\r\n          <div class=\"btn-group btn-group-toggle float-right mr-3\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Day\" id=\"option1\">Day</label>\r\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Month\" id=\"option2\">Month</label>\r\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Year\" id=\"option3\">Year</label>\r\n          </div>\r\n        </div><!--/.col-->\r\n      </div><!--/.row-->\r\n      <div class=\"chart-wrapper\" style=\"height:300px;margin-top:40px;\">\r\n        <canvas baseChart class=\"chart\"\r\n        [datasets]=\"mainChartData\"\r\n        [labels]=\"mainChartLabels\"\r\n        [options]=\"mainChartOptions\"\r\n        [colors]=\"mainChartColours\"\r\n        [legend]=\"mainChartLegend\"\r\n        [chartType]=\"mainChartType\">\r\n        </canvas>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Visits</div>\r\n          <strong>29.703 Users (40%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Unique</div>\r\n          <strong>24.093 Users (20%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Pageviews</div>\r\n          <strong>78.706 Views (60%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">New Users</div>\r\n          <strong>22.123 Users (80%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Bounce Rate</div>\r\n          <strong>40.15%</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/.card-->\r\n\r\n  <div class=\"row\">\r\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\r\n      <!--<div class=\"brand-card\">-->\r\n        <!--<div class=\"brand-card-header bg-facebook\">-->\r\n          <!--<i class=\"fa fa-facebook\"></i>-->\r\n          <!--<div class=\"chart-wrapper\">-->\r\n            <!--<canvas baseChart class=\"chart\"-->\r\n            <!--[datasets]=\"brandBoxChartData1\"-->\r\n            <!--[labels]=\"brandBoxChartLabels\"-->\r\n            <!--[options]=\"brandBoxChartOptions\"-->\r\n            <!--[colors]=\"brandBoxChartColours\"-->\r\n            <!--[legend]=\"brandBoxChartLegend\"-->\r\n            <!--[chartType]=\"brandBoxChartType\"></canvas>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"brand-card-body\">-->\r\n          <!--<div>-->\r\n            <!--<div class=\"text-value\">89k</div>-->\r\n            <!--<div class=\"text-uppercase text-muted small\">friends</div>-->\r\n          <!--</div>-->\r\n          <!--<div>-->\r\n            <!--<div class=\"text-value\">459</div>-->\r\n            <!--<div class=\"text-uppercase text-muted small\">feeds</div>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\r\n      <!--<div class=\"brand-card\">-->\r\n        <!--<div class=\"brand-card-header bg-twitter\">-->\r\n          <!--<i class=\"fa fa-twitter\"></i>-->\r\n          <!--<div class=\"chart-wrapper\">-->\r\n            <!--<canvas baseChart class=\"chart\"-->\r\n            <!--[datasets]=\"brandBoxChartData2\"-->\r\n            <!--[labels]=\"brandBoxChartLabels\"-->\r\n            <!--[options]=\"brandBoxChartOptions\"-->\r\n            <!--[colors]=\"brandBoxChartColours\"-->\r\n            <!--[legend]=\"brandBoxChartLegend\"-->\r\n            <!--[chartType]=\"brandBoxChartType\"></canvas>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"brand-card-body\">-->\r\n          <!--<div>-->\r\n            <!--<div class=\"text-value\">973k</div>-->\r\n            <!--<div class=\"text-uppercase text-muted small\">followers</div>-->\r\n          <!--</div>-->\r\n          <!--<div>-->\r\n            <!--<div class=\"text-value\">1.792</div>-->\r\n            <!--<div class=\"text-uppercase text-muted small\">tweets</div>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\r\n      <!--<div class=\"brand-card\">-->\r\n        <!--<div class=\"brand-card-header bg-linkedin\">-->\r\n          <!--<i class=\"fa fa-linkedin\"></i>-->\r\n          <!--<div class=\"chart-wrapper\">-->\r\n            <!--<canvas baseChart class=\"chart\"-->\r\n            <!--[datasets]=\"brandBoxChartData3\"-->\r\n            <!--[labels]=\"brandBoxChartLabels\"-->\r\n            <!--[options]=\"brandBoxChartOptions\"-->\r\n            <!--[colors]=\"brandBoxChartColours\"-->\r\n            <!--[legend]=\"brandBoxChartLegend\"-->\r\n            <!--[chartType]=\"brandBoxChartType\"></canvas>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"brand-card-body\">-->\r\n          <!--<div>-->\r\n            <!--<div class=\"text-value\">500+</div>-->\r\n            <!--<div class=\"text-uppercase text-muted small\">contacts</div>-->\r\n          <!--</div>-->\r\n          <!--<div>-->\r\n            <!--<div class=\"text-value\">292</div>-->\r\n            <!--<div class=\"text-uppercase text-muted small\">feeds</div>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\r\n      <!--<div class=\"brand-card\">-->\r\n        <!--<div class=\"brand-card-header bg-google-plus\">-->\r\n          <!--<i class=\"fa fa-google-plus\"></i>-->\r\n          <!--<div class=\"chart-wrapper\">-->\r\n            <!--<canvas baseChart class=\"chart\"-->\r\n            <!--[datasets]=\"brandBoxChartData4\"-->\r\n            <!--[labels]=\"brandBoxChartLabels\"-->\r\n            <!--[options]=\"brandBoxChartOptions\"-->\r\n            <!--[colors]=\"brandBoxChartColours\"-->\r\n            <!--[legend]=\"brandBoxChartLegend\"-->\r\n            <!--[chartType]=\"brandBoxChartType\"></canvas>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"brand-card-body\">-->\r\n          <!--<div>-->\r\n            <!--<div class=\"text-value\">894</div>-->\r\n            <!--<div class=\"text-uppercase text-muted small\">followers</div>-->\r\n          <!--</div>-->\r\n          <!--<div>-->\r\n            <!--<div class=\"text-value\">92</div>-->\r\n            <!--<div class=\"text-uppercase text-muted small\">circles</div>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n  </div><!--/.row-->\r\n  <div class=\"row\">\r\n    <!--<div class=\"col-md-12\">-->\r\n      <!--<div class=\"card\">-->\r\n        <!--<div class=\"card-header\">-->\r\n          <!--Traffic &amp; Sales-->\r\n        <!--</div>-->\r\n        <!--<div class=\"card-body\">-->\r\n          <!--<div class=\"row\">-->\r\n            <!--<div class=\"col-sm-6\">-->\r\n              <!--<div class=\"row\">-->\r\n                <!--<div class=\"col-sm-6\">-->\r\n                  <!--<div class=\"callout callout-info\">-->\r\n                    <!--<small class=\"text-muted\">New Clients</small>-->\r\n                    <!--<br>-->\r\n                    <!--<strong class=\"h4\">9,123</strong>-->\r\n                  <!--</div>-->\r\n                <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n                <!--<div class=\"col-sm-6\">-->\r\n                  <!--<div class=\"callout callout-danger\">-->\r\n                    <!--<small class=\"text-muted\">Recuring Clients</small>-->\r\n                    <!--<br>-->\r\n                    <!--<strong class=\"h4\">22,643</strong>-->\r\n                  <!--</div>-->\r\n                <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n              <!--</div>&lt;!&ndash;/.row&ndash;&gt;-->\r\n              <!--<hr class=\"mt-0\">-->\r\n              <!--<div class=\"progress-group mb-4\">-->\r\n                <!--<div class=\"progress-group-prepend\">-->\r\n                  <!--<span class=\"progress-group-text\">-->\r\n                    <!--Monday-->\r\n                  <!--</span>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 34%\" aria-valuenow=\"34\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 78%\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"progress-group mb-4\">-->\r\n                <!--<div class=\"progress-group-prepend\">-->\r\n                  <!--<span class=\"progress-group-text\">-->\r\n                    <!--Tuesday-->\r\n                  <!--</span>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 94%\" aria-valuenow=\"94\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"progress-group mb-4\">-->\r\n                <!--<div class=\"progress-group-prepend\">-->\r\n                  <!--<span class=\"progress-group-text\">-->\r\n                    <!--Wednesday-->\r\n                  <!--</span>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 12%\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 67%\" aria-valuenow=\"67\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"progress-group mb-4\">-->\r\n                <!--<div class=\"progress-group-prepend\">-->\r\n                  <!--<span class=\"progress-group-text\">-->\r\n                    <!--Thursday-->\r\n                  <!--</span>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 91%\" aria-valuenow=\"91\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"progress-group mb-4\">-->\r\n                <!--<div class=\"progress-group-prepend\">-->\r\n                  <!--<span class=\"progress-group-text\">-->\r\n                    <!--Friday-->\r\n                  <!--</span>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 73%\" aria-valuenow=\"73\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"progress-group mb-4\">-->\r\n                <!--<div class=\"progress-group-prepend\">-->\r\n                  <!--<span class=\"progress-group-text\">-->\r\n                    <!--Saturday-->\r\n                  <!--</span>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 53%\" aria-valuenow=\"53\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 82%\" aria-valuenow=\"82\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"progress-group mb-4\">-->\r\n                <!--<div class=\"progress-group-prepend\">-->\r\n                  <!--<span class=\"progress-group-text\">-->\r\n                    <!--Sunday-->\r\n                  <!--</span>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 9%\" aria-valuenow=\"9\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 69%\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n            <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n            <!--<div class=\"col-sm-6\">-->\r\n              <!--<div class=\"row\">-->\r\n                <!--<div class=\"col-sm-6\">-->\r\n                  <!--<div class=\"callout callout-warning\">-->\r\n                    <!--<small class=\"text-muted\">Pageviews</small>-->\r\n                    <!--<br>-->\r\n                    <!--<strong class=\"h4\">78,623</strong>-->\r\n                  <!--</div>-->\r\n                <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n                <!--<div class=\"col-sm-6\">-->\r\n                  <!--<div class=\"callout callout-success\">-->\r\n                    <!--<small class=\"text-muted\">Organic</small>-->\r\n                    <!--<br>-->\r\n                    <!--<strong class=\"h4\">49,123</strong>-->\r\n                  <!--</div>-->\r\n                <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n              <!--</div>&lt;!&ndash;/.row&ndash;&gt;-->\r\n              <!--<hr class=\"mt-0\">-->\r\n              <!--<div class=\"progress-group\">-->\r\n                <!--<div class=\"progress-group-header\">-->\r\n                  <!--<i class=\"icon-user progress-group-icon\"></i>-->\r\n                  <!--<div>Male</div>-->\r\n                  <!--<div class=\"ml-auto font-weight-bold\">43%</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"progress-group mb-5\">-->\r\n                <!--<div class=\"progress-group-header\">-->\r\n                  <!--<i class=\"icon-user-female progress-group-icon\"></i>-->\r\n                  <!--<div>Female</div>-->\r\n                  <!--<div class=\"ml-auto font-weight-bold\">37%</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"progress-group\">-->\r\n                <!--<div class=\"progress-group-header align-items-end\">-->\r\n                  <!--<i class=\"icon-globe progress-group-icon\"></i>-->\r\n                  <!--<div>Organic Search</div>-->\r\n                  <!--<div class=\"ml-auto font-weight-bold mr-2\">191.235</div>-->\r\n                  <!--<div class=\"text-muted small\">(56%)</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"progress-group\">-->\r\n                <!--<div class=\"progress-group-header align-items-end\">-->\r\n                  <!--<i class=\"icon-social-facebook progress-group-icon\"></i>-->\r\n                  <!--<div>Facebook</div>-->\r\n                  <!--<div class=\"ml-auto font-weight-bold mr-2\">51.223</div>-->\r\n                  <!--<div class=\"text-muted small\">(15%)</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"progress-group\">-->\r\n                <!--<div class=\"progress-group-header align-items-end\">-->\r\n                  <!--<i class=\"icon-social-twitter progress-group-icon\"></i>-->\r\n                  <!--<div>Twitter</div>-->\r\n                  <!--<div class=\"ml-auto font-weight-bold mr-2\">37.564</div>-->\r\n                  <!--<div class=\"text-muted small\">(11%)</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 11%\" aria-valuenow=\"11\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"progress-group\">-->\r\n                <!--<div class=\"progress-group-header align-items-end\">-->\r\n                  <!--<i class=\"icon-social-linkedin progress-group-icon\"></i>-->\r\n                  <!--<div>LinkedIn</div>-->\r\n                  <!--<div class=\"ml-auto font-weight-bold mr-2\">27.319</div>-->\r\n                  <!--<div class=\"text-muted small\">(8%)</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"progress-group-bars\">-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 8%\" aria-valuenow=\"8\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n            <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n          <!--</div>&lt;!&ndash;/.row&ndash;&gt;-->\r\n          <!--<br>-->\r\n          <!--<table class=\"table table-responsive-sm table-hover table-outline mb-0\">-->\r\n            <!--<thead class=\"thead-light\">-->\r\n              <!--<tr>-->\r\n                <!--<th class=\"text-center\"><i class=\"icon-people\"></i></th>-->\r\n                <!--<th>User</th>-->\r\n                <!--<th class=\"text-center\">Country</th>-->\r\n                <!--<th>Usage</th>-->\r\n                <!--<th class=\"text-center\">Payment Method</th>-->\r\n                <!--<th>Activity</th>-->\r\n              <!--</tr>-->\r\n            <!--</thead>-->\r\n            <!--<tbody>-->\r\n              <!--<tr>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<div class=\"avatar\">-->\r\n                    <!--<img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">-->\r\n                    <!--<span class=\"avatar-status badge-success\"></span>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div>Yiorgos Avraamu</div>-->\r\n                  <!--<div class=\"small text-muted\">-->\r\n                    <!--<span>New</span> | Registered: Jan 1, 2015-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"flag-icon flag-icon-us h4 mb-0\" title=\"us\" id=\"us\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"clearfix\">-->\r\n                    <!--<div class=\"float-left\">-->\r\n                      <!--<strong>50%</strong>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"float-right\">-->\r\n                      <!--<small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"fa fa-cc-mastercard\" style=\"font-size:24px\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"small text-muted\">Last login</div>-->\r\n                  <!--<strong>10 sec ago</strong>-->\r\n                <!--</td>-->\r\n              <!--</tr>-->\r\n              <!--<tr>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<div class=\"avatar\">-->\r\n                    <!--<img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">-->\r\n                    <!--<span class=\"avatar-status badge-danger\"></span>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div>Avram Tarasios</div>-->\r\n                  <!--<div class=\"small text-muted\">-->\r\n\r\n                    <!--<span>Recurring</span> | Registered: Jan 1, 2015-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"flag-icon flag-icon-br h4 mb-0\" title=\"br\" id=\"br\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"clearfix\">-->\r\n                    <!--<div class=\"float-left\">-->\r\n                      <!--<strong>10%</strong>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"float-right\">-->\r\n                      <!--<small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"fa fa-cc-visa\" style=\"font-size:24px\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"small text-muted\">Last login</div>-->\r\n                  <!--<strong>5 minutes ago</strong>-->\r\n                <!--</td>-->\r\n              <!--</tr>-->\r\n              <!--<tr>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<div class=\"avatar\">-->\r\n                    <!--<img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">-->\r\n                    <!--<span class=\"avatar-status badge-warning\"></span>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div>Quintin Ed</div>-->\r\n                  <!--<div class=\"small text-muted\">-->\r\n                    <!--<span>New</span> | Registered: Jan 1, 2015-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"flag-icon flag-icon-in h4 mb-0\" title=\"in\" id=\"in\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"clearfix\">-->\r\n                    <!--<div class=\"float-left\">-->\r\n                      <!--<strong>74%</strong>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"float-right\">-->\r\n                      <!--<small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 74%\" aria-valuenow=\"74\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"fa fa-cc-stripe\" style=\"font-size:24px\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"small text-muted\">Last login</div>-->\r\n                  <!--<strong>1 hour ago</strong>-->\r\n                <!--</td>-->\r\n              <!--</tr>-->\r\n              <!--<tr>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<div class=\"avatar\">-->\r\n                    <!--<img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">-->\r\n                    <!--<span class=\"avatar-status badge-secondary\"></span>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div>Enéas Kwadwo</div>-->\r\n                  <!--<div class=\"small text-muted\">-->\r\n                    <!--<span>New</span> | Registered: Jan 1, 2015-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"flag-icon flag-icon-fr h4 mb-0\" title=\"fr\" id=\"fr\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"clearfix\">-->\r\n                    <!--<div class=\"float-left\">-->\r\n                      <!--<strong>98%</strong>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"float-right\">-->\r\n                      <!--<small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 98%\" aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"fa fa-paypal\" style=\"font-size:24px\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"small text-muted\">Last login</div>-->\r\n                  <!--<strong>Last month</strong>-->\r\n                <!--</td>-->\r\n              <!--</tr>-->\r\n              <!--<tr>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<div class=\"avatar\">-->\r\n                    <!--<img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">-->\r\n                    <!--<span class=\"avatar-status badge-success\"></span>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div>Agapetus Tadeáš</div>-->\r\n                  <!--<div class=\"small text-muted\">-->\r\n                    <!--<span>New</span> | Registered: Jan 1, 2015-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"flag-icon flag-icon-es h4 mb-0\" title=\"es\" id=\"es\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"clearfix\">-->\r\n                    <!--<div class=\"float-left\">-->\r\n                      <!--<strong>22%</strong>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"float-right\">-->\r\n                      <!--<small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"fa fa-google-wallet\" style=\"font-size:24px\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"small text-muted\">Last login</div>-->\r\n                  <!--<strong>Last week</strong>-->\r\n                <!--</td>-->\r\n              <!--</tr>-->\r\n              <!--<tr>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<div class=\"avatar\">-->\r\n                    <!--<img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">-->\r\n                    <!--<span class=\"avatar-status badge-danger\"></span>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div>Friderik Dávid</div>-->\r\n                  <!--<div class=\"small text-muted\">-->\r\n                    <!--<span>New</span> | Registered: Jan 1, 2015-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"flag-icon flag-icon-pl h4 mb-0\" title=\"pl\" id=\"pl\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"clearfix\">-->\r\n                    <!--<div class=\"float-left\">-->\r\n                      <!--<strong>43%</strong>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"float-right\">-->\r\n                      <!--<small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"progress progress-xs\">-->\r\n                    <!--<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\r\n                  <!--</div>-->\r\n                <!--</td>-->\r\n                <!--<td class=\"text-center\">-->\r\n                  <!--<i class=\"fa fa-cc-amex\" style=\"font-size:24px\"></i>-->\r\n                <!--</td>-->\r\n                <!--<td>-->\r\n                  <!--<div class=\"small text-muted\">Last login</div>-->\r\n                  <!--<strong>Yesterday</strong>-->\r\n                <!--</td>-->\r\n              <!--</tr>-->\r\n            <!--</tbody>-->\r\n          <!--</table>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>&lt;!&ndash;/.col&ndash;&gt;-->\r\n  </div><!--/.row-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http) {
        this.http = http;
        this.radioModel = 'Month';
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--primary'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--info'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A'
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        // mainChart
        this.mainChartElements = 20;
        this.mainChartData1 = [];
        this.mainChartData2 = [];
        this.mainChartData3 = [];
        // public mainChartData: Array<any> = [];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Inning 1'
            },
            {
                data: this.mainChartData2,
                label: 'Inning 2'
            },
            {
                data: this.mainChartData3,
                label: 'BEP'
            }
            // console.log(this.mainChartData1);
        ];
        /* tslint:disable:max-line-length */
        // public mainChartLabels: Array<any> = ['Monday','Tues','Wed','Thu','Fri','Sat','Monday','Tues','Wed','Thu','Fri','Sat','Monday','Tues','Wed','Thu','Fri','Sat','Monday','Tues','Wed','Thu','Fri'];
        this.mainChartLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        /* tslint:enable:max-line-length */
        this.mainChartOptions = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"],
                intersect: true,
                mode: 'index',
                position: 'nearest',
                callbacks: {
                    labelColor: function (tooltipItem, chart) {
                        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value;
                            }
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(5),
                            max: 50
                        }
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.mainChartColours = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["hexToRgba"])(Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--info'), 10),
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--info'),
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--success'),
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--danger'),
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.brandBoxChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.brandBoxChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.brandBoxChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.brandBoxChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.brandBoxChartOptions = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.brandBoxChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.brandBoxChartLegend = false;
        this.brandBoxChartType = 'line';
    }
    DashboardComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
        var _this = this;
        var url = 'http://localhost:3000/balls';
        this.http.get(url).toPromise().then(function (res) {
            var results = JSON.parse(res['_body']);
            console.log(typeof (results));
            for (var i = 0; i < results.length; i++) {
                // console.log(results[i].runs)
                if (i % 2 == 0)
                    _this.mainChartData1.push(parseInt(results[i].runs));
                else {
                    _this.mainChartData2.push(results[i].runs);
                }
            }
            console.log(_this.mainChartData1);
            console.log(_this.mainChartData2);
            _this.mainChartData = [{
                    data: _this.mainChartData1,
                    label: 'Inning 1'
                },
                {
                    data: _this.mainChartData2,
                    label: 'Inning 2'
                },
                {
                    data: _this.mainChartData3,
                    label: 'BEP'
                }];
        });
        for (var i = 0; i < this.mainChartElements; i++) {
            // this.mainChartData1.push(65);
            // this.mainChartData2.push(65);
            // this.mainChartData3.push(65);
        }
        console.log(typeof (this.mainChartData3));
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map