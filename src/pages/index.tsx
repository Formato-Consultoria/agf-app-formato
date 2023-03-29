import { Inter } from 'next/font/google'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })
import cx from 'clsx';

import { models } from 'powerbi-client';
import { GetServerSideProps } from 'next';
import PowerBIReport from '@/components/dashboard';

interface Props {
  embedConfig: models.IEmbedConfigurationBase;
}

const Home: React.FC<Props> = () => {
  return (<>
    <iframe
      className={cx(inter.className, "w-full height-calc-screen")}
      title="FluxoCaixaGarden"
      src="https://app.powerbi.com/view?r=eyJrIjoiMmM2MjcyMjMtOGUyNi00NzRjLWJhNzQtM2FhMWRhYmYwZTY0IiwidCI6ImZjNTZkOWU5LTI5NGUtNDRhMS05MjllLWUwZWU1ZTZhMGQ5MCJ9&pageName=ReportSection"
      allowFullScreen={true}
    ></iframe>

    {/* <PowerBIReport embedConfig={embedConfig} /> */}
  </>)
}

export default Home;

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmM1NmQ5ZTktMjk0ZS00NGExLTkyOWUtZTBlZTVlNmEwZDkwLyIsImlhdCI6MTY4MDAwODAxOSwibmJmIjoxNjgwMDA4MDE5LCJleHAiOjE2ODAwMTE5MTksImFpbyI6IkUyWmdZTGpwZVdqQ3lpYnZpTSszSm54Ty9pczZDUUE9IiwiYXBwaWQiOiJkZDNiNmJjNS02MDcyLTQ5M2MtOWUzYi1iZTQ0NWUwZDM2ZDIiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mYzU2ZDllOS0yOTRlLTQ0YTEtOTI5ZS1lMGVlNWU2YTBkOTAvIiwib2lkIjoiOWU4ZmM4MzItN2E4OS00NTY2LWI2NTMtOGQzMDliMDM4MGVhIiwicmgiOiIwLkFWSUE2ZGxXX0U0cG9VU1NudUR1WG1vTmtBa0FBQUFBQUFBQXdBQUFBQUFBQUFDNkFBQS4iLCJzdWIiOiI5ZThmYzgzMi03YTg5LTQ1NjYtYjY1My04ZDMwOWIwMzgwZWEiLCJ0aWQiOiJmYzU2ZDllOS0yOTRlLTQ0YTEtOTI5ZS1lMGVlNWU2YTBkOTAiLCJ1dGkiOiJZb3JMN2JWSWEwMjBKQmROVjNWNUFRIiwidmVyIjoiMS4wIn0.Bc3ZVU_JBTZ-h_OvFtSgKAs60FZw62S4gdNXOgyk3mTXerSplS7HXozndfBabSmA28S_8Tw_kRgj161P72Imr7KcfCgxB1Ww9l_f3PdNvNM-7zU2YmxUAFS4Dawc0iH7LpyDC1C4lfs7cihvSU_mkC2mbHY14AzVeZ0tAhIdhC0YbksOD34-OpOdYVcb3AYGnLPuJwVoVs3wNk2OmvHNLIjWx20zLYMJJm6mWOM_cbAky7jSTMj8-F4RDrt2IHaFvoJiDLXw550evmVkGTlvxjzq1nHzFk5adVf2Kse8XDg_8Dx2HH7YcCcG5fAyCM_2etMloWMLeSemP00Iqkg4uw';
//   const embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=e568664c-0dfe-4545-9f12-b337179ba255&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19';

//   const embedConfig: models.IEmbedConfigurationBase = {
//     type: 'report',
//     accessToken: accessToken,
//     embedUrl: embedUrl,
//     tokenType: models.TokenType.Aad,
//   };

//   return {
//     props: {
//       embedConfig,
//     },
//   };
// };