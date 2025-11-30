import { NextResponse } from 'next/server';

// Debug endpoint to check if environment variables are set (development only)
export async function GET() {
    // Only allow in development
    if (process.env.NODE_ENV !== 'development') {
        return NextResponse.json(
            { error: 'Not available in production' },
            { status: 403 }
        );
    }

    return NextResponse.json({
        EMAIL_USER: process.env.EMAIL_USER ? '✅ Set' : '❌ Not set',
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? '✅ Set' : '❌ Not set',
        EMAIL_RECIPIENT: process.env.EMAIL_RECIPIENT || 'Using EMAIL_USER as default',
        NODE_ENV: process.env.NODE_ENV,
    });
}
