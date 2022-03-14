// tslint:disable:variable-name Describing an API that's defined elsewhere.

import { PropertyAccessorsConstructor } from './lib/mixins/property-accessors';
import { PropertyEffectsConstructor } from './lib/mixins/property-effects';
import { PropertiesChangedConstructor } from './lib/mixins/properties-changed.js';
import { PropertiesMixinConstructor } from './lib/mixins/properties-mixin.js';
import { ElementMixinConstructor } from './lib/mixins/element-mixin.js';
import { TemplateStampConstructor } from './lib/mixins/template-stamp.js';

export {html} from './lib/utils/html-tag.js';

export {PolymerElement};

declare const PolymerElement_Base: typeof HTMLElement & ElementMixinConstructor & PropertyEffectsConstructor & TemplateStampConstructor & PropertyAccessorsConstructor & PropertiesChangedConstructor & PropertiesMixinConstructor

/**
 * Base class that provides the core API for Polymer's meta-programming
 * features including template stamping, data-binding, attribute deserialization,
 * and property change observation.
 */
declare class PolymerElement extends PolymerElement_Base {
}