export class GattModel {

    private _name: string;
    private _startDate: Date;
    private _endDate: Date;
    private _id: number;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get endDate(): Date {
        return this._endDate;
    }

    set endDate(value: Date) {
        this._endDate = value;
    }

    get startDate(): Date {
        return this._startDate;
    }

    set startDate(value: Date) {
        this._startDate = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

}
