import React from 'react';
import { TERipple } from 'tw-elements-react';

export default function CardWithRippleExample() {
    return (
        <div
            className="block rounded-lg border-[0.5px] border-gray-300">
            <TERipple>
                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat">
                    <a href="#!">
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                </div>
            </TERipple>
            <div className="title p-6">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Card title
                </h5>
                <p className="body mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <img
                    className="rounded-t-lg"

                    alt="" />
                <TERipple>



                </TERipple>
            </div>
        </div>
    );
}