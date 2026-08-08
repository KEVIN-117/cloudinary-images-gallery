import { Terminal, Check } from "lucide-react"
import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/atoms/alert"

export function SuccessAlert({message}:{message: string}) {
    return (
        <Alert variant="success">
            <Check className="h-4 w-4"/>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                {message}
            </AlertDescription>
        </Alert>
    )
}


export function AbortAlert({message}:{message: string}) {
    return (
        <Alert variant="warning">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Abort</AlertTitle>
            <AlertDescription>
                {message}
            </AlertDescription>
        </Alert>
    )
}


