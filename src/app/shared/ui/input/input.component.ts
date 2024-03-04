import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  forwardRef,
  input,
} from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent implements ControlValueAccessor, Validator {
  type = input<INPUT_TYPE>(INPUT_TYPE.text);
  placeholder = input<string>("");
  ngClass = input<string | object>("");
  disabled = input<boolean>(false);
  required = input<boolean>(false);

  onChange!: (value: ValueType) => void;
  onTouched!: () => void;
  onValidatorChange!: () => void;

  protected _isDisabled = false;
  protected _value: ValueType = null;

  constructor() {
    effect(() => {
      this._isDisabled = this.disabled();
    });
  }

  //override
  validate(
    control: AbstractControl<unknown, unknown>
  ): ValidationErrors | null {
    return control.errors;
  }

  //override
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  //override
  writeValue(value: ValueType): void {
    this._value = value;
  }

  //override
  registerOnChange(fn: (value: ValueType) => void): void {
    this.onChange = fn;
  }

  //override
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  //override
  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }
}

export enum INPUT_TYPE {
  text = "text",
  number = "number",
  email = "email",
}

type ValueType = string | null | number;
