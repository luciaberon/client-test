interface ServiceLoading {
    state: 'loading';
}
interface ServiceLoaded<T> {
    state: 'loaded';
    payload: T;
}
interface ServiceError {
  state: 'error';
  error: Error;
}
export type Service<T> =
 | ServiceLoading
 | ServiceLoaded<T>
 | ServiceError;