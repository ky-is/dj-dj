/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AudiobookObject } from './AudiobookObject';

export type SavedAudiobookObject = {
	/**
	 * The date and time the audiobook was saved
	 * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
	 * If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
	 *
	 */
	added_at?: string;
	/**
	 * Information about the audiobook.
	 */
	audiobook?: AudiobookObject;
};

