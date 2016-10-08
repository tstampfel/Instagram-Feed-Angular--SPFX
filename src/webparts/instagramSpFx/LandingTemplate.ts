import styles from './InstagramSpFx.module.scss';
import './images/instagram.jpg';

export default class LandingTempalte {

      public static templateHtml: string =   `
      <body ng-app="instafeed">
        <section ng-controller="ShowImages as images">
            <div class="${styles.instagramSpFx}">

            <header>
            <center>
              <h1>Instagram Feed</h1>

              <center/>
            </header>

            <div class="${styles.bar}">
                <!-- These two buttons switch the layout variable,
                     which causes the correct UL to be shown. -->
                <a class="${styles.listicon}" ng-class="{${styles.active}: layout == 'list'}" ng-click="layout = 'list'"></a>
                <a class="${styles.gridicon}" ng-class="{${styles.active}: layout == 'grid'}" ng-click="layout = 'grid'"></a>
            </div>

            <ul ng-show="layout == 'grid'" class="${styles.grid}">
                <!-- A view with big photos and no text -->
                <li ng-repeat="p in pics">
                    <a href="{{p.link}}" target="_blank"><img ng-src="{{p.images.low_resolution.url}}" /></a>
                </li>
            </ul>
            <ul ng-show="layout == 'list'" class="${styles.list}">
                <!-- A compact view smaller photos and titles -->
                <li ng-repeat="p in pics">
                    <a href="{{p.link}}" target="_blank"><img ng-src="{{p.images.thumbnail.url}}" /></a>
                    <p>{{p.caption.text}}</p>
                </li>
            </ul>

            <div/>
        </section>


    </body>

      `;



}