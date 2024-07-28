import { useRouteError } from "react-router-dom";

function isErrorWithMessage(error: unknown): error is { message: string, statusText: string } {
    return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as any).message === 'string'&&
        typeof (error as any).statusText === 'string'

    );
}


export default function ErrorPage() {
    const error = useRouteError();

    if (isErrorWithMessage(error)) {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        );
    } else {
        return <div>Unknown error occurred</div>;
    }

}