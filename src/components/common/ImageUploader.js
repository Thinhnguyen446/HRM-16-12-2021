import React from 'react'
import loadable from "@loadable/component"
import styled from 'styled-components';
const ReactFilestack = loadable(()=>import("filestack-react"));
export default function ImageUploader({handleSuccessUpload}) {
    return (
        <div>
            <ReactFilestack
                apikey="AzXX3HKpTvKyIT0axmodNz"
                customRender={({onPick}) => (
                    <DropdownWrapper className = "dropzone-mutiple dz-clickable">
                        <div className="dz-default dz-message">
                            <button className="dz-button" type="button" onClick={onPick}>
                                chon file
                            </button>
                        </div>
                    </DropdownWrapper>
                )}
                onSuccess={(res)=>handleSuccessUpload(res)}
            />
        </div>
    )
}

export const ImagePreviewer = ({previewImg, previewImgEdit}) => {
    const url = previewImg ? previewImg.filesUploaded[0].url : previewImgEdit[0].url;
    return (
        <div className="list-group-item dz-processing dz-image-preview">
            <div className="row align-items-center thumbnail-preview-dropzone">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <img className="avatar-img rounded" src={`${url}`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const DropdownWrapper = styled.div`
    z-index: 0;
    position: relative;
    display: flex;
    flex-direction: column;
`;
