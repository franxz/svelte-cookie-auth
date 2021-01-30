export const getReqOpt = {
  credentials: 'include'
}

export const postReqOpt = {
  method: 'POST',
  credentials: 'include'
}

export const postReqOptJSON = payload => ({
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
})