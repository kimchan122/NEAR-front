import React from "react";
import LabsTree from '../../../../assets/LabsTree.png';
import Grid1 from '../../../../assets/Grid1.png';
import Grid2 from '../../../../assets/Grid2.png';
import Grid3 from '../../../../assets/Grid3.png';

const ShowLabs = () => {
    return (
        <>
            <div className="LabsBox">
                <div>
                    <img src={LabsTree} />
                    <div>
                        <div>
                            <img src={Grid2} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ShowLabs;