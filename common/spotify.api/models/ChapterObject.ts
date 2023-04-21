/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChapterBase } from './ChapterBase';
import type { SimplifiedAudiobookObject } from './SimplifiedAudiobookObject';

export type ChapterObject = (ChapterBase & {
	/**
	 * The audiobook for which the chapter belongs.
	 *
	 */
	audiobook: SimplifiedAudiobookObject;
});

