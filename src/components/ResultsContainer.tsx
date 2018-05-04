import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { UpdateSearchTermAction, UpdateLastHitAction } from '../actions';
import { Link, LinkProps } from '../results/Link';

interface DisplayResults {
  name: string;
  score?: number;
  component: (props: LinkProps) => JSX.Element;
}

export interface Props {
  searchTerm: string;
  lastHit: string;
  displayedResults: DisplayResults[];
  inputAnimation: boolean;
}

export interface DispatchProps {
  updateSearchTerm: (value: string) => UpdateSearchTermAction;
  updateLastHit: (value: string) => UpdateLastHitAction;
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
          <div
            className={css(
              this.props.inputAnimation && styles.fadeIn,
              styles.fullMatch,
            )}
          >
            {this.fullMatch()!.component({ link: this.props.updateSearchTerm })}
          </div>
        )}
        {!this.fullMatch() &&
          this.props.displayedResults.map(r => (
            <div key={r.name} className={css(styles.listItem)}>
              <Link link={this.props.updateSearchTerm}>{r.name}</Link>
            </div>
          ))}
        {this.props.displayedResults.length === 0 && (
          <div>
            Hmm&hellip; not finding anything for "{this.props.searchTerm}",
            sorry
          </div>
        )}
      </div>
    );
  }
}

const fadeInAnimation = {
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  container: {
    fontSize: '22px',
    lineHeight: '36px',
    marginTop: '36px',
  },
  listItem: {
    marginBottom: '16px',
    fontWeight: 'bold',
  },
  fullMatch: {
    opacity: 0,
  },
  fadeIn: {
    animationName: [fadeInAnimation],
    animationDelay: '0.1s',
    animationDuration: '1.4s',
    animationFillMode: 'forwards',
  },
});

// TODO: Display results better possibly adding arrow/enter navigation
