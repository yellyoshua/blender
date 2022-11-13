
/**
 * @param {{content: string, env: 'dev' | 'prod'}} params 
 * @returns 
 */

export default function Script ({content, env}) {
  const isProduction = import.meta.env.PROD;
  const isDevelopment = import.meta.env.DEV;

  const canRender = env === 'dev' ? isDevelopment : isProduction;

  if (canRender) {
    return <script dangerouslySetInnerHTML={{__html: content}} type="text/javascript" />;
  }

  return null;
}
