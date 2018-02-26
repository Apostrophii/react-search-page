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
import ThisSite from './ThisSite';
import { UpdateSearchTermAction } from '../actions';

export interface LinkProps {
  link: (value: string) => UpdateSearchTermAction;
}

interface ResultsList {
  names: string[];
  component: (props: LinkProps) => JSX.Element;
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
  ThisSite,
];

export const defaultList: ResultsList[] = [
  FullName,
  EyeColor,
  Hometown,
  Resume,
];
