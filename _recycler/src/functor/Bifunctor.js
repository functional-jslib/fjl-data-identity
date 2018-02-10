/**
 * Created by edlc on 12/9/16.
 */
'use strict';
import Functor from './Functor';
import {subClass} from 'fjl';

let Bifunctor = subClass(Functor,
    function Bifunctor (value1, value2) {
        if (!(this instanceof Bifunctor)) {
            return new Bifunctor(value1, value2);
        }
        Functor.call(this, value1);
        this.value2 = value2;
    },
    {
        first (fn) {
            return new this.constructor(fn(this.value), this.value2);
        },

        second (fn) {
            return new this.constructor(this.value, fn(this.value2));
        },

        bimap: function (fn1, fn2) {
            return new this.constructor(
                fn1(this.value),
                fn2(this.value2)
            );
        }
    });

export default Bifunctor;