/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingObject } from './PagingObject';
import type { TrackObject } from './TrackObject';

export type PagingTrackObject = (PagingObject & {
	items?: Array<TrackObject>;
});

