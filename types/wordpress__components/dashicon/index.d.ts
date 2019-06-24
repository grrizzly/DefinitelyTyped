import { ComponentType, SVGProps } from "@wordpress/element";

declare namespace Dashicon {
    interface Props extends SVGProps<SVGSVGElement> {
        /**
         * ID of the dashicon to use.
         */
        icon: Icon;
        /**
         * Width of the icon (in pixels).
         * @defaultValue 20
         */
        size?: number;
    }
    type Icon =
        | "admin-appearance"
        | "admin-collapse"
        | "admin-comments"
        | "admin-customizer"
        | "admin-generic"
        | "admin-home"
        | "admin-links"
        | "admin-media"
        | "admin-multisite"
        | "admin-network"
        | "admin-page"
        | "admin-plugins"
        | "admin-post"
        | "admin-settings"
        | "admin-site-alt"
        | "admin-site-alt2"
        | "admin-site-alt3"
        | "admin-site"
        | "admin-tools"
        | "admin-users"
        | "album"
        | "align-center"
        | "align-full-width"
        | "align-left"
        | "align-none"
        | "align-pull-left"
        | "align-pull-right"
        | "align-right"
        | "align-wide"
        | "analytics"
        | "archive"
        | "arrow-down-alt"
        | "arrow-down-alt2"
        | "arrow-down"
        | "arrow-left-alt"
        | "arrow-left-alt2"
        | "arrow-left"
        | "arrow-right-alt"
        | "arrow-right-alt2"
        | "arrow-right"
        | "arrow-up-alt"
        | "arrow-up-alt2"
        | "arrow-up"
        | "art"
        | "awards"
        | "backup"
        | "block-default"
        | "book-alt"
        | "book"
        | "buddicons-activity"
        | "buddicons-bbpress-logo"
        | "buddicons-buddypress-logo"
        | "buddicons-community"
        | "buddicons-forums"
        | "buddicons-friends"
        | "buddicons-groups"
        | "buddicons-pm"
        | "buddicons-replies"
        | "buddicons-topics"
        | "buddicons-tracking"
        | "building"
        | "businessman"
        | "button"
        | "calendar-alt"
        | "calendar"
        | "camera"
        | "carrot"
        | "cart"
        | "category"
        | "chart-area"
        | "chart-bar"
        | "chart-line"
        | "chart-pie"
        | "clipboard"
        | "clock"
        | "cloud-saved"
        | "cloud-upload"
        | "cloud"
        | "columns"
        | "controls-back"
        | "controls-forward"
        | "controls-pause"
        | "controls-play"
        | "controls-repeat"
        | "controls-skipback"
        | "controls-skipforward"
        | "controls-volumeoff"
        | "controls-volumeon"
        | "cover-image"
        | "dashboard"
        | "desktop"
        | "dismiss"
        | "download"
        | "edit"
        | "editor-aligncenter"
        | "editor-alignleft"
        | "editor-alignright"
        | "editor-bold"
        | "editor-break"
        | "editor-code"
        | "editor-contract"
        | "editor-customchar"
        | "editor-expand"
        | "editor-help"
        | "editor-indent"
        | "editor-insertmore"
        | "editor-italic"
        | "editor-justify"
        | "editor-kitchensink"
        | "editor-ltr"
        | "editor-ol-rtl"
        | "editor-ol"
        | "editor-outdent"
        | "editor-paragraph"
        | "editor-paste-text"
        | "editor-paste-word"
        | "editor-quote"
        | "editor-removeformatting"
        | "editor-rtl"
        | "editor-spellcheck"
        | "editor-strikethrough"
        | "editor-table"
        | "editor-textcolor"
        | "editor-ul"
        | "editor-underline"
        | "editor-unlink"
        | "editor-video"
        | "ellipsis"
        | "email-alt"
        | "email-alt2"
        | "email"
        | "embed-audio"
        | "embed-generic"
        | "embed-photo"
        | "embed-post"
        | "embed-video"
        | "excerpt-view"
        | "exit"
        | "external"
        | "facebook-alt"
        | "facebook"
        | "feedback"
        | "filter"
        | "flag"
        | "format-aside"
        | "format-audio"
        | "format-chat"
        | "format-gallery"
        | "format-image"
        | "format-quote"
        | "format-status"
        | "format-video"
        | "forms"
        | "googleplus"
        | "grid-view"
        | "groups"
        | "hammer"
        | "heading"
        | "heart"
        | "hidden"
        | "html"
        | "id-alt"
        | "id"
        | "image-crop"
        | "image-filter"
        | "image-flip-horizontal"
        | "image-flip-vertical"
        | "image-rotate-left"
        | "image-rotate-right"
        | "image-rotate"
        | "images-alt"
        | "images-alt2"
        | "index-card"
        | "info-outline"
        | "info"
        | "insert-after"
        | "insert-before"
        | "insert"
        | "instagram"
        | "keyboard-hide"
        | "laptop"
        | "layout"
        | "leftright"
        | "lightbulb"
        | "list-view"
        | "location-alt"
        | "location"
        | "lock"
        | "marker"
        | "media-archive"
        | "media-audio"
        | "media-code"
        | "media-default"
        | "media-document"
        | "media-interactive"
        | "media-spreadsheet"
        | "media-text"
        | "media-video"
        | "megaphone"
        | "menu-alt"
        | "menu"
        | "microphone"
        | "migrate"
        | "minus"
        | "money"
        | "move"
        | "nametag"
        | "networking"
        | "no-alt"
        | "no"
        | "palmtree"
        | "paperclip"
        | "performance"
        | "phone"
        | "playlist-audio"
        | "playlist-video"
        | "plus-alt"
        | "plus-light"
        | "plus"
        | "portfolio"
        | "post-status"
        | "pressthis"
        | "products"
        | "randomize"
        | "redo"
        | "remove"
        | "rest-api"
        | "rss"
        | "saved"
        | "schedule"
        | "screenoptions"
        | "search"
        | "share-alt"
        | "share-alt2"
        | "share"
        | "shield-alt"
        | "shield"
        | "shortcode"
        | "slides"
        | "smartphone"
        | "smiley"
        | "sort"
        | "sos"
        | "star-empty"
        | "star-filled"
        | "star-half"
        | "sticky"
        | "store"
        | "table-col-after"
        | "table-col-before"
        | "table-col-delete"
        | "table-row-after"
        | "table-row-before"
        | "table-row-delete"
        | "tablet"
        | "tag"
        | "tagcloud"
        | "testimonial"
        | "text"
        | "thumbs-down"
        | "thumbs-up"
        | "tickets-alt"
        | "tickets"
        | "tide"
        | "translation"
        | "trash"
        | "twitter"
        | "undo"
        | "universal-access-alt"
        | "universal-access"
        | "unlock"
        | "update"
        | "upload"
        | "vault"
        | "video-alt"
        | "video-alt2"
        | "video-alt3"
        | "visibility"
        | "warning"
        | "welcome-add-page"
        | "welcome-comments"
        | "welcome-learn-more"
        | "welcome-view-site"
        | "welcome-widgets-menus"
        | "welcome-write-blog"
        | "wordpress-alt"
        | "wordpress"
        | "yes-alt"
        | "yes";
}
declare const Dashicon: ComponentType<Dashicon.Props>;

export default Dashicon;
