/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingObject } from './PagingObject';
import type { SimplifiedAudiobookObject } from './SimplifiedAudiobookObject';

export type PagingSimplifiedAudiobookObject = (PagingObject & {
	items?: Array<SimplifiedAudiobookObject>;
});

