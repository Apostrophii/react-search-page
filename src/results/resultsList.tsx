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
import ThisSite from './ThisSite';
import Luke from './Luke';
import ClimbingMountStHelens from './ClimbingMountStHelens';
import Swivel from './Swivel';
import TheLemonTree from './TheLemonTree';
import EuropaUniversalis from './EuropaUniversalis';
import Projects from './Projects';
import FavoriteFood from './FavoriteFood';
import Family from './Family';
import Education from './Education';
import Japan from './Japan';
import SpanishInquisition from './SpanishInquisition';
import Work from './Work';
import References from './References';
import Hobbies from './Hobbies';
import Skills from './Skills';
import AdventistGiving from './AdventistGiving';
import GlobalYouthDay from './GlobalYouthDay';
import AWRStats from './AWRStats';
import SearchSite from './SearchSite';
import UniverseRing from './UniverseRing';
import NavalMineLamp from './NavalMineLamp';
import StereoscopicVisualizer from './StereoscopicVisualizer';
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
  ThisSite,
  Luke,
  ClimbingMountStHelens,
  Swivel,
  TheLemonTree,
  EuropaUniversalis,
  Projects,
  FavoriteFood,
  Family,
  Education,
  Japan,
  SpanishInquisition,
  Work,
  References,
  Hobbies,
  Skills,
  AdventistGiving,
  GlobalYouthDay,
  AWRStats,
  SearchSite,
  UniverseRing,
  NavalMineLamp,
  StereoscopicVisualizer,
];

export const defaultList: ResultsList[] = [
  FullName,
  EyeColor,
  Hometown,
  Resume,
];
