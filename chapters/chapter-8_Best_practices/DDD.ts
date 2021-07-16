export abstract class Value<T> {
  constructor(protected props: T) {
    this.props = props;
  }
}

export interface AddressProps {
  country: string;
  postCode: string;
  street: string;
}

export class Address extends Value<AddressProps> {
  get country(): string {
    return this.props.country;
  }

  get postCode(): string {
    return this.props.postCode;
  }

  get street(): string {
    return this.props.street;
  }

  equals<T>(other?: Value<T>): boolean {
    if (!other) {
      return false;
    }
    return JSON.stringify(this) === JSON.stringify(other);
  }

  protected isValid?(props: AddressProps): void {
    // Check if address if valid
  }
}
