import { NextPageContext } from "next";

const Error = ({statusCode}) => {
    return(
        <p>
            {statusCode
              ? `Error: ${statusCode} occurred on server.`
              : `An error occurred on the client.`
            }
        </p>
    );
};

Error.getInitialProps = ({res,err}: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode: 404;
    return {statusCode};
};

export default Error;