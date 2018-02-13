import * as React from 'react';
import EyeColor from './EyeColor';
import FullName from './FullName';
import Name from './Name';
import DateOfBirth from './DateOfBirth';
import PlaceOfBirth from './PlaceOfBirth';
import Hometown from './Hometown';

interface ResultsList {
  names: string[];
  component: () => JSX.Element;
}

export const resultsList: ResultsList[] = [
  EyeColor,
  Name,
  FullName,
  DateOfBirth,
  PlaceOfBirth,
  Hometown,
];

export const defaultList: ResultsList[] = [FullName, EyeColor, Hometown];
