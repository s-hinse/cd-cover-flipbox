/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { 
    useBlockProps, 
    InspectorControls, 
    MediaUpload, 
    MediaUploadCheck,
    RichText,
    BlockControls,
    AlignmentToolbar,
    RichTextToolbarButton
} from '@wordpress/block-editor';
import {
    PanelBody,
    Button,
    RangeControl,
    ColorPicker,
    ToolbarGroup,
    ToolbarButton,
    SelectControl,
    ToggleControl
} from '@wordpress/components';
import { format as formatIcon, formatBold, color as colorIcon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import metadata from './block.json';

/**
 * Register the block
 */
registerBlockType(metadata.name, {
    ...metadata,

    /**
     * Edit function for the block
     */
    edit: ({ attributes, setAttributes }) => {
        const { 
            imageUrl, 
            imageId, 
            imageAlt, 
            infoText, 
            boxSize,
            boxSizeUnit,
            backgroundColor,
            textColor,
            animationType,
            showShadow
        } = attributes;

        const blockProps = useBlockProps({
            className: 'cd-cover-flipbox',
        });

        // Function to handle image selection
        const onSelectImage = (media) => {
            setAttributes({
                imageUrl: media.url,
                imageId: media.id,
                imageAlt: media.alt || '',
            });
        };

        // Function to remove image
        const removeImage = () => {
            setAttributes({
                imageUrl: '',
                imageId: undefined,
                imageAlt: '',
            });
        };

        return (
            <div {...blockProps}>
                <BlockControls>
                    {/* The formatting options will be automatically provided by the RichText component 
                        based on the allowedFormats property */}
                </BlockControls>

                <InspectorControls>
                    <PanelBody title={__('Flipbox Settings', 'cd-cover-flipbox')} initialOpen={true}>
                        <div className="cd-cover-flipbox-size-controls" style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <div style={{ flex: '1' }}>
                                <RangeControl
                                    label={__(`Box Size (${boxSizeUnit})`, 'cd-cover-flipbox')}
                                    value={boxSize}
                                    onChange={(value) => setAttributes({ boxSize: value })}
                                    min={boxSizeUnit === 'px' ? 100 : 10}
                                    max={boxSizeUnit === 'px' ? 600 : 100}
                                    step={boxSizeUnit === 'px' ? 10 : 5}
                                />
                            </div>
                            <div style={{ width: '80px', marginLeft: '8px' }}>
                                <SelectControl
                                    label={__('Unit', 'cd-cover-flipbox')}
                                    value={boxSizeUnit}
                                    options={[
                                        { label: 'px', value: 'px' },
                                        { label: '%', value: '%' },
                                    ]}
                                    onChange={(value) => setAttributes({ boxSizeUnit: value })}
                                />
                            </div>
                        </div>

                        <div className="components-base-control">
                            <label className="components-base-control__label">
                                {__('Image', 'cd-cover-flipbox')}
                            </label>
                            <div className="cd-cover-flipbox-media-controls">
                                {!imageUrl ? (
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={onSelectImage}
                                            allowedTypes={['image']}
                                            value={imageId}
                                            render={({ open }) => (
                                                <Button 
                                                    onClick={open}
                                                    className="cd-cover-flipbox-select-button"
                                                    isSecondary
                                                >
                                                    {__('Select Image', 'cd-cover-flipbox')}
                                                </Button>
                                            )}
                                        />
                                    </MediaUploadCheck>
                                ) : (
                                    <div className="cd-cover-flipbox-image-preview">
                                        <img 
                                            src={imageUrl} 
                                            alt={imageAlt}
                                            className="cd-cover-flipbox-thumbnail"
                                        />
                                        <MediaUploadCheck>
                                            <Button 
                                                onClick={removeImage}
                                                className="cd-cover-flipbox-remove-button-sidebar"
                                                isLink
                                                isDestructive
                                            >
                                                {__('Remove Image', 'cd-cover-flipbox')}
                                            </Button>
                                        </MediaUploadCheck>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="components-base-control">
                            <label className="components-base-control__label">
                                {__('Background Color (Back Side)', 'cd-cover-flipbox')}
                            </label>
                            <ColorPicker
                                color={backgroundColor}
                                onChangeComplete={(value) => setAttributes({ backgroundColor: value.hex })}
                                disableAlpha
                            />
                        </div>

                        <div className="components-base-control">
                            <label className="components-base-control__label">
                                {__('Text Color (Back Side)', 'cd-cover-flipbox')}
                            </label>
                            <ColorPicker
                                color={textColor}
                                onChangeComplete={(value) => setAttributes({ textColor: value.hex })}
                                disableAlpha
                            />
                        </div>

                        <SelectControl
                            label={__('Animation Type', 'cd-cover-flipbox')}
                            value={animationType}
                            options={[
                                { label: __('Horizontal Flip', 'cd-cover-flipbox'), value: 'flip-horizontal' },
                                { label: __('Fade', 'cd-cover-flipbox'), value: 'fade' },
                                { label: __('Grow from Middle', 'cd-cover-flipbox'), value: 'grow-middle' },
                                { label: __('Flip from Top', 'cd-cover-flipbox'), value: 'flip-top' },
                            ]}
                            onChange={(value) => setAttributes({ animationType: value })}
                        />

                        <ToggleControl
                            label={__('Show Shadow', 'cd-cover-flipbox')}
                            checked={showShadow}
                            onChange={(value) => setAttributes({ showShadow: value })}
                            help={showShadow ? __('Shadow is enabled.', 'cd-cover-flipbox') : __('Shadow is disabled.', 'cd-cover-flipbox')}
                        />
                    </PanelBody>
                </InspectorControls>

                <div 
                    className={`cd-cover-flipbox-container cd-cover-flipbox-${animationType}`}
                    style={{
                        width: `${boxSize}${boxSizeUnit}`,
                        height: `${boxSize}${boxSizeUnit}`,
                    }}
                >
                    <div className="cd-cover-flipbox-inner">
                        <div 
                            className="cd-cover-flipbox-front"
                            style={{
                                boxShadow: showShadow ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                            }}
                        >
                            {!imageUrl ? (
                                <div className="cd-cover-flipbox-placeholder">
                                    <p>{__('Select an image from the sidebar', 'cd-cover-flipbox')}</p>
                                </div>
                            ) : (
                                <img 
                                    src={imageUrl} 
                                    alt={imageAlt}
                                    className="cd-cover-flipbox-image"
                                />
                            )}
                        </div>
                        <div 
                            className="cd-cover-flipbox-back"
                            style={{
                                backgroundColor: backgroundColor,
                                color: textColor,
                                boxShadow: showShadow ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                            }}
                        >
                            <div className="cd-cover-flipbox-back-content">
                                <RichText
                                    tagName="div"
                                    value={infoText}
                                    onChange={(value) => setAttributes({ infoText: value })}
                                    placeholder={__('Enter info text here...', 'cd-cover-flipbox')}
                                    allowedFormats={['core/bold', 'core/italic', 'core/text-color']}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    /**
     * Save function for the block
     */
    save: ({ attributes }) => {
        const { 
            imageUrl, 
            imageAlt, 
            infoText, 
            boxSize,
            boxSizeUnit,
            backgroundColor,
            textColor,
            animationType,
            showShadow
        } = attributes;

        const blockProps = useBlockProps.save({
            className: 'cd-cover-flipbox',
        });

        return (
            <div {...blockProps}>
                <div 
                    className={`cd-cover-flipbox-container cd-cover-flipbox-${animationType}`}
                    style={{
                        width: `${boxSize}${boxSizeUnit}`,
                        height: `${boxSize}${boxSizeUnit}`,
                    }}
                >
                    <div className="cd-cover-flipbox-inner">
                        <div 
                            className="cd-cover-flipbox-front"
                            style={{
                                boxShadow: showShadow ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                            }}
                        >
                            {imageUrl && (
                                <img 
                                    src={imageUrl} 
                                    alt={imageAlt}
                                    className="cd-cover-flipbox-image"
                                />
                            )}
                        </div>
                        <div 
                            className="cd-cover-flipbox-back"
                            style={{
                                backgroundColor: backgroundColor,
                                color: textColor,
                                boxShadow: showShadow ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                            }}
                        >
                            <div className="cd-cover-flipbox-back-content">
                                <RichText.Content
                                    tagName="div"
                                    value={infoText}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});
