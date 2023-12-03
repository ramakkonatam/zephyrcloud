pipeline {
    agent any

    environment {
        // Set the Node.js and npm installation
        NODEJS_HOME = tool 'NodeJS'
        PATH = "${NODEJS_HOME}/bin:${PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build your npm project
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests for your npm project
                sh 'npm test'
            }
        }

        // Add more stages as needed for deployment, etc.
    }

    post {
        success {
            // Perform actions after a successful build
            echo 'Build successful!'

            // Example: Trigger another job or perform additional actions
            // build job: 'DeployJob', wait: false
        }

        failure {
            // Perform actions after a failed build
            echo 'Build failed!'

            // Example: Send a notification or trigger another job
            // emailext subject: 'Build Failed', body: 'The build failed.', recipientProviders: [developers()]
        }
    }
}
