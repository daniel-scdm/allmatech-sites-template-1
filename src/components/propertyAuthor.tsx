/** @jsx jsx */
import { jsx } from 'theme-ui';

import styles from 'src/styles/Home.module.css';
import Section from 'src/styles/Section.module.css';

export default function PropertyAuthor() {
  return (
    <div className={Section.author}>
        <div>
            <img 
                src="https://secure.gravatar.com/avatar/e90c8270a85ee63ede779f656176f039?s=150&d=mm&r=g"
                width="150"
                height="150"
            />

            <span>
                <a href="#">Merv Barret</a>
            </span>
        </div>
        
    </div>
  )
}