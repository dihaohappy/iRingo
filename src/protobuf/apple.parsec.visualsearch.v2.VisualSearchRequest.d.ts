// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,output_javascript
// @generated from protobuf file "apple.parsec.visualsearch.v2.VisualSearchRequest.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { PegasusQueryContext } from "./apple.parsec.search.PegasusQueryContext";
/**
 * @generated from protobuf message VisualSearchRequest
 */
export interface VisualSearchRequest {
    /**
     * MISSING_TYPE *_visualQueryLite = 1
     * MISSING_TYPE *_includeDomains = 2;
     *
     * @generated from protobuf field: PegasusQueryContext queryContext = 3;
     */
    queryContext?: PegasusQueryContext;
}
declare class VisualSearchRequest$Type extends MessageType<VisualSearchRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message VisualSearchRequest
 */
export declare const VisualSearchRequest: VisualSearchRequest$Type;
export {};