/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Custom Document
*/

import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {

	static async getInitialProps(ctx) {

    	const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps }

  	}

	render() {
		return (
      		<Html lang="es_ES" data-theme="dark">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
    	);
  	}
}

export default CustomDocument;