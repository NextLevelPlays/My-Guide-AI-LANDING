import type { VercelRequest, VercelResponse } from '@vercel/node'
import fs from 'fs'
import path from 'path'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email } = req.body

  // Validate input
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  try {
    // For Vercel, we'll store in a simple in-memory approach
    // In production, you'd use a database like PostgreSQL, MongoDB, etc.
    // For now, we'll just return success and log it
    
    const entry = {
      name,
      email,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || 'unknown'
    }

    // Log to console (visible in Vercel logs)
    console.log('Waitlist signup:', entry)

    // Return success
    res.status(200).json({
      success: true,
      message: 'Successfully added to waitlist'
    })
  } catch (error) {
    console.error('Error processing waitlist:', error)
    res.status(500).json({ error: 'Failed to process request' })
  }
}
