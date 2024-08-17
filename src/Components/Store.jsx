import React from "react";
import Abayas from "./Abayas";
import Accessories from "./Accessories";
import Stoles from "./Stoles";

export default function Store () {

    return (
        <>
            <div id="store" className="divStore">
                <div className="sub-divStore">
                    <Abayas />
                </div>
                <div className="sub-divStore">
                    <Accessories />
                </div>
                <div className="sub-divStore">
                    <Stoles />
                </div>
            </div>
        </>
    );
}
