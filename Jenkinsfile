pipeline {
    agent any

    environment {
        // Set the Node.js and npm installation
        NODEJS_HOME = tool 'NodeJS'
        PATH = "${NODEJS_HOME}/bin:${PATH}"
    }

    parameters {
        string(name: 'PROJECT_KEY',defaultValue:'KAN', description: 'Jira project key for tests')
        string(name: 'TOKEN', defaultValue:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb250ZXh0Ijp7ImJhc2VVcmwiOiJodHRwczovL3JhbWFrb25hdGFtLmF0bGFzc2lhbi5uZXQiLCJ1c2VyIjp7ImFjY291bnRJZCI6IjcxMjAyMDphYjk2OWMzOC04MDNmLTQyYTYtOWE4OC1iZGFjOWZmNDA3MWQifX0sImlzcyI6ImNvbS5rYW5vYWgudGVzdC1tYW5hZ2VyIiwic3ViIjoiY2EwNjIxNDktNzIzYy0zZTIyLWIwYjctMDMxMTVjNGJkYWIyIiwiZXhwIjoxNzMzMjAyNDQ0LCJpYXQiOjE3MDE2NjY0NDR9.qJOr2yBetsQGRXdUuRdWLtdTUPF5DIynjsfD1b0RsNw',description: 'Public REST API token for Zephyr Scale')
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

        // stage('Build') {
        //     steps {
        //         // Build your npm project
        //         sh 'npm run build'
        //     }
        // }

        stage('Test') {
            steps {
                // Run tests for your npm project
                sh 'npm run test-local'
            }
        }
        stage('Debug') {
    steps {
        sh 'ls -R ./test/reports'
    }
  }
        stage('Create Zip File') {
            steps {
                // Create zip file
                sh 'zip -D ./test/reports/junit-results.zip ./test/reports/junit-results'
            }
        }
         stage('Upload Results to Zephyr Scale') {
            steps {
                script {
                    // Check if parameters are provided
                    if (!params.PROJECT_KEY || !params.TOKEN) {
                        error "Some or all of the parameters are missing. Usage: jenkinsJob -DPROJECT_KEY=<projectKey> -DTOKEN=<token>"
                    }

                    // Set project key and token
                    def PROJECT_KEY = params.PROJECT_KEY
                    def TOKEN = params.TOKEN

                    // API URL
                    def URL = "https://api.zephyrscale.smartbear.com/v2/automations/executions/junit?projectKey=${PROJECT_KEY}&autoCreateTestCases=false"

                    // Upload results to Zephyr Scale
                    sh "curl -o -X POST -F 'file=@test/reports/junit_tests.zip' -H 'Authorization: Bearer ${TOKEN}' $URL"
                }
            }
        }
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
