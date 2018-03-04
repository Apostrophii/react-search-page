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
import Luke from './Luke';
import ClimbingMountStHelens from './ClimbingMountStHelens';
import Swivel from './Swivel';
import TheLemonTree from './TheLemonTree';
import EuropaUniversalis from './EuropaUniversalis';
import Projects from './Projects';
import FavoriteFood from './FavoriteFood';
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
  Luke,
  ClimbingMountStHelens,
  Swivel,
  TheLemonTree,
  EuropaUniversalis,
  Projects,
  FavoriteFood,
];

export const defaultList: ResultsList[] = [
  FullName,
  EyeColor,
  Hometown,
  Resume,
];
