import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { UpdateSearchTermAction } from '../actions';

interface DisplayResults {
  name: string;
  score?: number;
  component: () => JSX.Element;
}

export interface Props {
  searchTerm: string;
  displayedResults: DisplayResults[];
}

export interface DispatchProps {
  updateSearchTerm: (value: string) => UpdateSearchTermAction;
}

export class ResultsContainer extends React.Component<Props & DispatchProps> {
  fullMatch() {
    return this.props.displayedResults.find(
      r => r.name === this.props.searchTerm,
    );
  }

  render() {
    return (
      <div className={css(styles.container)}>
        {this.fullMatch() && (
          <div>
            {/* <div className={css(styles.term)}>{this.fullMatch()!.name}</div> */}
            <div>{this.fullMatch()!.component()}</div>
          </div>
        )}
        {!this.fullMatch() &&
          this.props.displayedResults.map(r => (
            <div
              key={r.name}
              className={css(styles.term, styles.link)}
              onClick={() => this.props.updateSearchTerm(r.name)}
            >
              {r.name}
            </div>
          ))}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: '26px',
    marginTop: '20px',
  },
  term: {
    fontWeight: 'bold',
  },
  link: {
    cursor: 'pointer',
    color: 'deepskyblue',
    ':hover': {
      color: 'black',
    },
  },
});
