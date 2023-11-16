#!/bin/bash

# Automatically get the Google Cloud project ID
PROJECT_ID=$(gcloud config get-value project)

# Automatically get the default App Engine service ID
SERVICE_ID=$(gcloud app describe --format="value(defaultService.id)")

# Set the number of recent versions you want to keep
KEEP=3

# Get a list of all versions for the specified service
versions=$(gcloud app versions list --service "$SERVICE_ID" --project "$PROJECT_ID" --format="value(version.id)")

# Count the number of versions
count=$(echo "$versions" | wc -l)

# Calculate number of versions to delete
let "delete_count = count - KEEP"

# Check if there are versions to delete
if [ $delete_count -gt 0 ]; then
    echo "Deleting $delete_count old versions."

    # Delete the oldest versions
    for version in $(echo "$versions" | head -n $delete_count); do
        echo "Deleting version $version"
        gcloud app versions delete "$version" --service "$SERVICE_ID" --project "$PROJECT_ID" -q
    done

    echo "Deletion complete."
else
    echo "No versions to delete. Keeping the latest $KEEP versions."
fi
