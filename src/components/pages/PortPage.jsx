import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";

import PortCont from "../portfolio/PortCont";

const PortPage = () => {
    return (
        <Contents>
            <ContTitle title="popular menu" />
            <PortCont />
        </Contents>
    );
};

export default PortPage;
