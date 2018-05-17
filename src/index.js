import 'bootstrap';
import './style.scss';
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Fontsize from '@ckeditor/ckeditor5-font/src/fontsize';
import Fontfamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Uploadadapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Blockquote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImageUpload from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import Imagecaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import Imagestyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import Imagetoolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Imageupload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import CollaborativeEditing from '@ckeditor/ckeditor5-collaboration/src/collaborativeediting';

export default class DecoupledEditor extends DecoupledEditorBase {}

DecoupledEditor.build = {
	plugins: [
		Essentials,
		Alignment,
		Fontsize,
		Fontfamily,
		Highlight,
		Uploadadapter,
		Autoformat,
		Bold,
		Italic,
		Strikethrough,
		Underline,
		Blockquote,
		EasyImageUpload,
		Heading,
		Image,
		Imagecaption,
		Imagestyle,
		Imagetoolbar,
		Imageupload,
		Link,
		List,
		Paragraph,
		CollaborativeEditing
	],
	cloudServices: {
		tokenUrl: 'https://16307.cke-cs.com/token/dev/OBSCURED',
    uploadUrl: 'https://16307.cke-cs.com/easyimage/upload/',
		webSocketUrl: 'https://16307.cke-cs.com/ws',
		documentId: 'somethingunique'
	},
	config: {
		toolbar: {
			items: [
				'heading',
				'|',
				'fontsize',
				'fontfamily',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'highlight',
				'|',
				'alignment',
				'|',
				'numberedList',
				'bulletedList',
				'|',
				'link',
				'blockquote',
				'imageUpload',
				'|',
				'undo',
				'redo'
			]
		},
		image: {
			toolbar: [
				'imageStyle:full',
				'imageStyle:side',
				'|',
				'imageTextAlternative'
			]
		},
		language: 'en'
	}
};

console.log(DecoupledEditor)

DecoupledEditor
  .create( document.querySelector( '.document-editor__editable' ))
  .then( editor => {
    document.querySelector('.document-editor__toolbar').appendChild( editor.ui.view.toolbar.element );
    window.editor = editor;
  } )
  .catch( err => {
    console.error( err );
  } );
