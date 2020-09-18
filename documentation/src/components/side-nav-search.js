/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { __decorate } from "tslib";
import { LitElement, html, property, query, } from 'lit-element';
import sideNavSearchMenuStyles from './side-nav-search.css';
import { Overlay } from '@spectrum-web-components/overlay';
import '@spectrum-web-components/search/sp-search.js';
import '@spectrum-web-components/popover/sp-popover.js';
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-group.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/illustrated-message/sp-illustrated-message.js';
import { AppRouter } from '../router.js';
import { search } from './search-index.js';
window.Overlay = Overlay;
class SearchComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.searchResultsPopover = null;
        this.results = [];
    }
    static get styles() {
        return [sideNavSearchMenuStyles];
    }
    focus() {
        this.searchField.focus();
    }
    handleSearchInput(event) {
        if (event.target) {
            const searchField = event.target;
            this.updateSearchResults(searchField.value);
        }
    }
    handleKeydown(event) {
        const { code } = event;
        if (code !== 'Tab') {
            this.handleSearchInput(event);
        }
        if (code !== 'ArrowDown' || !this.searchResultsPopover) {
            return;
        }
        const popoverMenu = this.searchResultsPopover.querySelector('sp-menu');
        popoverMenu.focus();
    }
    async openPopover() {
        if (!this.popover)
            return;
        this.searchResultsPopover = this.popover;
        this.closeOverlay = await Overlay.open(this, 'inline', this.popover, {
            offset: 0,
            placement: 'bottom',
        });
    }
    closePopover() {
        if (this.closeOverlay) {
            this.closeOverlay();
            delete this.closeOverlay;
        }
    }
    async updateSearchResults(value) {
        if (value.length < 3) {
            this.closePopover();
            return;
        }
        const searchParam = `${value.trim()}*`;
        this.results = await search(searchParam);
        this.openPopover();
    }
    renderResults() {
        if (this.results.length > 0) {
            return html `
                <sp-menu>
                    ${this.results.map((category) => html `
                            <sp-menu-group>
                                <span slot="header">${category.name}</span>
                                ${category.results.map((result) => html `
                                        <sp-menu-item
                                            @click=${() => {
                AppRouter.go(result.url);
                this.closePopover();
            }}
                                        >
                                            ${result.label}
                                        </sp-menu-item>
                                    `)}
                            </sp-menu-group>
                        `)}
                </sp-menu>
            `;
        }
        else {
            return html `
                <sp-illustrated-message
                    heading="No results found"
                    description="Try another search term."
                ></sp-illustrated-message>
            `;
        }
    }
    render() {
        return html `
            <div id="search-container">
                <div id="search-field">
                    <sp-search
                        @input=${this.handleSearchInput}
                        @change=${this.handleSearchInput}
                        @keydown=${this.handleKeydown}
                        autocomplete="off"
                    ></sp-search>
                </div>
                <sp-popover id="search-results-menu" open>
                    <style>
                        #search-results-menu {
                            width: 368px;
                            max-height: calc(100vh - 200px);
                            margin-left: 24px;
                            display: flex;
                            flex-direction: column;
                        }

                        sp-illustrated-message {
                            flex: 1 1;
                            margin-bottom: 2em;
                        }
                    </style>
                    ${this.renderResults()}
                </sp-popover>
            </div>
        `;
    }
}
__decorate([
    query('sp-popover')
], SearchComponent.prototype, "popover", void 0);
__decorate([
    query('sp-search')
], SearchComponent.prototype, "searchField", void 0);
__decorate([
    property({ type: Array })
], SearchComponent.prototype, "results", void 0);
customElements.define('docs-search', SearchComponent);
//# sourceMappingURL=side-nav-search.js.map