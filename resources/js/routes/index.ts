import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see routes/web.php:7
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:7
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see routes/web.php:7
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:7
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see routes/web.php:7
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:7
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:7
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see routes/web.php:13
* @route '/home'
*/
export const mainpage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mainpage.url(options),
    method: 'get',
})

mainpage.definition = {
    methods: ["get","head"],
    url: '/home',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:13
* @route '/home'
*/
mainpage.url = (options?: RouteQueryOptions) => {
    return mainpage.definition.url + queryParams(options)
}

/**
* @see routes/web.php:13
* @route '/home'
*/
mainpage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mainpage.url(options),
    method: 'get',
})

/**
* @see routes/web.php:13
* @route '/home'
*/
mainpage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: mainpage.url(options),
    method: 'head',
})

/**
* @see routes/web.php:13
* @route '/home'
*/
const mainpageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mainpage.url(options),
    method: 'get',
})

/**
* @see routes/web.php:13
* @route '/home'
*/
mainpageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mainpage.url(options),
    method: 'get',
})

/**
* @see routes/web.php:13
* @route '/home'
*/
mainpageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mainpage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

mainpage.form = mainpageForm

/**
* @see routes/web.php:16
* @route '/produtos'
*/
export const produtos = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: produtos.url(options),
    method: 'get',
})

produtos.definition = {
    methods: ["get","head"],
    url: '/produtos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:16
* @route '/produtos'
*/
produtos.url = (options?: RouteQueryOptions) => {
    return produtos.definition.url + queryParams(options)
}

/**
* @see routes/web.php:16
* @route '/produtos'
*/
produtos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: produtos.url(options),
    method: 'get',
})

/**
* @see routes/web.php:16
* @route '/produtos'
*/
produtos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: produtos.url(options),
    method: 'head',
})

/**
* @see routes/web.php:16
* @route '/produtos'
*/
const produtosForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: produtos.url(options),
    method: 'get',
})

/**
* @see routes/web.php:16
* @route '/produtos'
*/
produtosForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: produtos.url(options),
    method: 'get',
})

/**
* @see routes/web.php:16
* @route '/produtos'
*/
produtosForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: produtos.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

produtos.form = produtosForm

/**
* @see routes/web.php:19
* @route '/contato'
*/
export const contato = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contato.url(options),
    method: 'get',
})

contato.definition = {
    methods: ["get","head"],
    url: '/contato',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:19
* @route '/contato'
*/
contato.url = (options?: RouteQueryOptions) => {
    return contato.definition.url + queryParams(options)
}

/**
* @see routes/web.php:19
* @route '/contato'
*/
contato.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contato.url(options),
    method: 'get',
})

/**
* @see routes/web.php:19
* @route '/contato'
*/
contato.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contato.url(options),
    method: 'head',
})

/**
* @see routes/web.php:19
* @route '/contato'
*/
const contatoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contato.url(options),
    method: 'get',
})

/**
* @see routes/web.php:19
* @route '/contato'
*/
contatoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contato.url(options),
    method: 'get',
})

/**
* @see routes/web.php:19
* @route '/contato'
*/
contatoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contato.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

contato.form = contatoForm

/**
* @see routes/web.php:22
* @route '/sobre'
*/
export const sobre = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sobre.url(options),
    method: 'get',
})

sobre.definition = {
    methods: ["get","head"],
    url: '/sobre',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:22
* @route '/sobre'
*/
sobre.url = (options?: RouteQueryOptions) => {
    return sobre.definition.url + queryParams(options)
}

/**
* @see routes/web.php:22
* @route '/sobre'
*/
sobre.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sobre.url(options),
    method: 'get',
})

/**
* @see routes/web.php:22
* @route '/sobre'
*/
sobre.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sobre.url(options),
    method: 'head',
})

/**
* @see routes/web.php:22
* @route '/sobre'
*/
const sobreForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sobre.url(options),
    method: 'get',
})

/**
* @see routes/web.php:22
* @route '/sobre'
*/
sobreForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sobre.url(options),
    method: 'get',
})

/**
* @see routes/web.php:22
* @route '/sobre'
*/
sobreForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sobre.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sobre.form = sobreForm

/**
* @see routes/web.php:27
* @route '/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:27
* @route '/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see routes/web.php:27
* @route '/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:27
* @route '/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see routes/web.php:27
* @route '/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:27
* @route '/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:27
* @route '/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm
