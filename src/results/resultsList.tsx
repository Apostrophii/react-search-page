import * as React from 'react';
import EyeColor from './EyeColor';
import FullName from './FullName';
import Name from './Name';
import DateOfBirth from './DateOfBirth';
import PlaceOfBirth from './PlaceOfBirth';
import Hometown from './Hometown';
import CurrentResidence from './CurrentResidence';
import Job from './Job';
import Pets from './Pets';
import FavoriteColors from './FavoriteColors';
import Resume from './Resume';
import PersonalInfo from './PersonalInfo';
import Portfolio from './Portfolio';

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
  CurrentResidence,
  Job,
  Pets,
  FavoriteColors,
  Resume,
  PersonalInfo,
  Portfolio,
];

export const defaultList: ResultsList[] = [
  FullName,
  EyeColor,
  Hometown,
  Resume,
];
