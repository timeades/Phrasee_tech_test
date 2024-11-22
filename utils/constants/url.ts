/* 
base url can be set in the playwright config file but if a project has multiple environments then it is better to set it/them here
and then use the baseUrl variable in the tests instead of hardcoding the url. E.g baseUrl + '/login' 
*/

export const baseUrl = 'https://app-qa.jacquard.com';
