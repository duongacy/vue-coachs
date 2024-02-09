- state:

* userId
* token

- getters:

* userId
* token
* isAuthenticated

- actions:

* signin
* signup
* logout

- mutations:

* setUser

- payload sigin/signup:
  {
  email,
  password,
  returnSecureToken
  }
- response:
  {
  idToken, localId, expiresIn
  }

files: SignInForm.vue, SignupForm.vue, UserAuth.vue, router/index.js
paths need to authen: /coaches/register, /requests-received
