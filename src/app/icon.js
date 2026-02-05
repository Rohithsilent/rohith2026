import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
    try {
        const imagePath = join(process.cwd(), 'src', 'assets', 'images', 'facecutout2.jpg')
        const imageData = await readFile(imagePath)
        const base64Image = `data:image/jpeg;base64,${imageData.toString('base64')}`

        return new ImageResponse(
            (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={base64Image}
                        alt="Rohith"
                        width="32"
                        height="32"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            ),
            {
                ...size,
            }
        )
    } catch (error) {
        // Fallback to a simple colored circle if image fails to load
        return new ImageResponse(
            (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #e9204f 0%, #ff4d6d 100%)',
                        borderRadius: '50%',
                        color: 'white',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    R
                </div>
            ),
            {
                ...size,
            }
        )
    }
}
