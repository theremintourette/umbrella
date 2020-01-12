import { AProc } from "./aproc";

export const integrator = (coeff?: number, start?: number) =>
    new Integrator(coeff, start);

/**
 * https://en.wikipedia.org/wiki/Leaky_integrator
 */
export class Integrator extends AProc<number, number> {
    protected _z1!: number;

    constructor(coeff = 1, start = 0) {
        super(start);
        this.setCoeff(coeff);
    }

    next(x: number) {
        return (this._val = this._val * this._z1 + x);
    }

    setCoeff(c: number) {
        this._z1 = c;
    }

    zero() {
        this._val = 0;
    }
}
