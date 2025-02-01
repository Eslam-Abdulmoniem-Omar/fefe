import React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PolicyPopupProps {
  title: string
  content: string
  onClose: () => void
}

export default function PolicyPopup({ title, content, onClose }: PolicyPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 pt-16 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
        <div className="flex flex-col items-center mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
          {title.toLowerCase().includes("privacy policy") && (
            <p className="text-sm text-gray-500">Last Updated: 1/30/2025</p>
          )}
        </div>
        <Button
          variant="secondary"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 shadow-md"
        >
          <X className="h-6 w-6 text-gray-700" />
          <span className="sr-only">Close</span>
        </Button>
        <div className="prose max-w-none">
          {content.split("\n").map((paragraph, index) => {
            if (
              paragraph.startsWith("1.") ||
              paragraph.startsWith("2.") ||
              paragraph.startsWith("3.") ||
              paragraph.startsWith("4.") ||
              paragraph.startsWith("5.") ||
              paragraph.startsWith("6.") ||
              paragraph.startsWith("7.")
            ) {
              return (
                <h3 key={index} className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                  {paragraph}
                </h3>
              )
            }
            return (
              <p key={index} className="mb-4 text-gray-600">
                {paragraph}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

