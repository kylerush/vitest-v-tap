import { describe, expect, test, afterAll } from '@jest/globals'
import app from '../src/app'

describe('Basic test suite', () => {
  const fastify = app()
    afterAll(async () => {
      await fastify.close()
    })
  test('Basic test', async () => {
    const root = await fastify.inject({
      method: 'GET',
      url: '/'
    })
    expect(JSON.parse(root.payload)).toEqual({ hello: 'world' })
  })
})
